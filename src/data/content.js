export const BRAND = {
  name: 'LDK ART',
  tagline: 'Ideias materializadas.',
  instagramHandle: '@ldk___art',
  instagramUrl: 'https://www.instagram.com/ldk___art/',
};

// WhatsApp number in international format, digits only (country + area code + number).
// TODO: replace with the real business number, e.g. '5511999999999'.
export const WHATSAPP_NUMBER = '5547988967056';

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const GENERAL_WHATSAPP_MESSAGE = 'Olá, LDK ART! Vim pelo site e gostaria de fazer um orçamento.';

// Links internos (React Router). "Contato" fica no rodapé de todas as páginas, então aponta só para a âncora.
export const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Sobre', to: '/#sobre' },
  { label: 'Contato', to: '#contato' },
];
