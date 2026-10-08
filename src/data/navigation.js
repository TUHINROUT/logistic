import { SERVICES } from './services';

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About Cargora', href: '/about' },
  ...Object.entries(SERVICES).map(([slug, s]) => ({
    label: s.title,
    navLabel: s.nav || s.title,
    href: `/${slug}`,
    image: s.image,
    children: Object.entries(s.subs).map(([sub, v]) => ({ label: v.title, href: `/${slug}/${sub}` })),
  })),
  { label: 'Contact Us', href: '/contact' },
];
