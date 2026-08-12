/**
 * Tipos de domínio compartilhados pela aplicação.
 * Centralizar aqui evita duplicação e facilita refatoração.
 */

export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'tradicional' | 'especial' | 'doce';
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: 'clock' | 'flame' | 'leaf' | 'truck';
}

export interface NavLink {
  label: string;
  href: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: WeeklyHours;
  social: SocialLinks;
}

export interface WeeklyHours {
  [weekday: string]: string;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}
