import type { Feature, NavLink, Pizza, RestaurantInfo, Testimonial } from '../types/domain';

/**
 * Dados estáticos do restaurante.
 * Manter centralizado facilita tradução e atualização do conteúdo.
 */

export const RESTAURANT_INFO: RestaurantInfo = {
  name: 'Forno di Napoli',
  tagline: 'Pizza artesanal, massa de fermentação natural',
  description:
    'Há mais de 15 anos servindo pizzas com ingredientes selecionados, molho de tomate italiano e aquela massa leve, crocante e aerada que só se faz com tempo e dedicação.',
  address: 'Rua das Oliveiras, 742 — Vila Madalena, São Paulo',
  phone: '(11) 3456-7890',
  whatsapp: '5511987654321',
  hours: {
    'Terça a Quinta': '18h às 23h',
    'Sexta e Sábado': '18h às 00h',
    Domingo: '18h às 22h',
    'Segunda': 'Fechado',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Cardápio', href: '#menu' },
  { label: 'Sobre', href: '#about' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 'fresh',
    title: 'Ingredientes frescos',
    description:
      'Selecionamos diariamente ingredientes de produtores locais para garantir qualidade e sabor em cada fatia.',
    icon: 'leaf',
  },
  {
    id: 'wood',
    title: 'Forno a lenha',
    description:
      'Assadas em forno a lenha a 400°C, nossas pizzas ficam crocantes por fora e macias por dentro, em 90 segundos.',
    icon: 'flame',
  },
  {
    id: 'natural',
    title: 'Massa de fermentação natural',
    description:
      'Nossa massa descansa por 48 horas, resultando em uma textura leve, digestível e cheia de sabor.',
    icon: 'clock',
  },
  {
    id: 'delivery',
    title: 'Delivery rápido',
    description:
      'Entrega em até 40 minutos na região, com embalagem que mantém a pizza quentinha e crocante até sua mesa.',
    icon: 'truck',
  },
];

export const PIZZAS: Pizza[] = [
  {
    id: 'margherita',
    name: 'Margherita',
    description:
      'Molho de tomate San Marzano, mussarela de búfala, manjericão fresco e azeite extra virgem.',
    price: 49.9,
    category: 'tradicional',
    image:
      'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=600&fit=crop',
    tags: ['clássica', 'vegetariana'],
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Mussarela, pepperoni picante, orégano e um toque de azeite com alho.',
    price: 54.9,
    category: 'tradicional',
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=600&fit=crop',
    tags: ['picante'],
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi',
    description:
      'Mussarela, gorgonzola, parmesão e provolone. Para os amantes de queijo de verdade.',
    price: 62.9,
    category: 'especial',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
    tags: ['queijo'],
  },
  {
    id: 'diavola',
    name: 'Diavola',
    description:
      'Molho de tomate, mussarela, salame italiano, pimenta calabresa e manjericão.',
    price: 58.9,
    category: 'especial',
    image:
      'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=600&fit=crop',
    tags: ['picante', 'italiana'],
  },
  {
    id: 'napolitana',
    name: 'Napolitana',
    description:
      'Tomate fresco, anchovas, alcaparras, azeitonas pretas, alho e azeite extra virgem.',
    price: 67.9,
    category: 'especial',
    image:
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=600&fit=crop',
    tags: ['frutos do mar'],
  },
  {
    id: 'brigadeiro',
    name: 'Brigadeiro',
    description:
      'Massa de chocolate, brigadeiro caseiro, granulado e morangos frescos. A pizza doce mais amada.',
    price: 45.9,
    category: 'doce',
    image:
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop',
    tags: ['doce', 'chocolate'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Camila Rodrigues',
    rating: 5,
    comment:
      'A melhor pizza de São Paulo, sem exagero. Massa leve, ingredientes frescos e aquele sabor de Itália. Pedimos toda semana!',
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
  {
    id: 't2',
    name: 'Rafael Mendes',
    rating: 5,
    comment:
      'O atendimento é impecável e a pizza chega quentinha, com aquela massa crocante de forno a lenha. Recomendo a Diavola!',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 't3',
    name: 'Patricia Lima',
    rating: 5,
    comment:
      'Sou cliente há 5 anos. A qualidade é sempre consistente e as receitas especiais são incríveis. Parabéns à equipe!',
    avatar: 'https://i.pravatar.cc/100?img=32',
  },
];

/**
 * Gera a URL do WhatsApp com mensagem pré-preenchida para um sabor.
 */
export const buildWhatsAppUrl = (phone: string, pizzaName: string): string => {
  const message = encodeURIComponent(
    `Olá! Gostaria de pedir uma pizza ${pizzaName}. Poderia me passar o valor e o tempo de entrega?`,
  );
  return `https://wa.me/${phone}?text=${message}`;
};
