/** Site-wide constants: identity, contact channels and navigation. */
export const site = {
  name: 'Ábia Bognola',
  brand: 'UXfinity',
  role: 'Product Designer',
  description:
    'Portfólio de Ábia Bognola, Product Designer (UX/UI). Cases de fintech, saúde e edtech, do problema à entrega.',
  email: 'abiabognola14@gmail.com',
  linkedin: 'https://www.linkedin.com/in/%C3%A1bia-bognola/',
  year: 2026,
};

export type NavItem = { href: string; pt: string; en: string };

export const nav: NavItem[] = [
  { href: '/', pt: 'Início', en: 'Home' },
  { href: '/cases/', pt: 'Cases', en: 'Work' },
  { href: '/sobre/', pt: 'Sobre', en: 'About' },
  { href: '/contato/', pt: 'Contato', en: 'Contact' },
];
