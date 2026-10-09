// Imagens do carrossel "Projetos que ganharam vida".
// Para adicionar uma imagem, coloque o arquivo em public/assets/projects/ e inclua um novo objeto na lista —
// o carrossel se ajusta sozinho. As imagens são exibidas em formato horizontal (paisagem) e recortadas
// automaticamente; use `position` (CSS object-position) para escolher qual parte da foto fica visível.
// Fotos atuais: Unsplash (licença livre — https://unsplash.com/license).
export const PROJECTS = [
  {
    title: 'Mini personagens',
    image: '/assets/projects/homemaranha.png',
    alt: 'Mesa com diversas peças impressas em 3D: miniaturas, máscara, vaso, organizadores e personagens',
  },
  {
    title: 'Bancada de impressão',
    image: '/assets/projects/deadpool.png',
    alt: 'Impressora 3D sobre uma mesa ao lado de várias peças impressas coloridas',
  },
  {
    title: 'Caveira de decoração',
    image: '/assets/projects/caveira.png',
    alt: 'Caveira impressa em 3D',
  },
  {
    title: 'Personagem espadachim',
    image: '/assets/projects/personagem-espadachim.webp',
    alt: 'Miniatura cinza de personagem espadachim impressa em 3D',
    position: 'center 30%',
  },
  {
    title: 'Martelo Thor',
    image: '/assets/projects/thor.png',
    alt: 'Martelo thor rei do trovão',
  },
  {
    title: 'Caracol',
    image: '/assets/projects/caracol.png',
    alt: 'Caracol estiloso impresso em 3D',
  },
];

export const CUSTOM_PROJECT_MESSAGE =
  'Olá, LDK ART! Tenho uma ideia e gostaria de solicitar um projeto de impressão 3D personalizada.';
