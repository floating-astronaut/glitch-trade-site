// Single source of truth for brand metadata, nav links, and pricing-free copy.
// Keep this file dependency-free — imported from both server and client code.

export const site = {
  name: 'Glitch Trade',
  parent: 'Glitch Executor Labs',
  domain: 'trade.glitchexecutor.com',
  url: 'https://trade.glitchexecutor.com',
  contactEmail: 'support@glitchexecutor.com',
  tagline: '9 AI models. Your trading stack.',
  description:
    'A 9-model AI ensemble licensed to trading operators — plug it into your own infrastructure, run analysis, simulation, and paper-first execution across crypto and derivatives. You keep every execution decision.',
  ogImage: '/assets/brand/og-image.png',
  twitter: '@glitchexecutor',
  locale: 'en-US',
} as const;

// Legal entity (contracts, notices, disputes bind here — not the product brand).
// Nuraveda is a sole proprietorship; no corporate veil. Update if/when the
// entity type or address changes.
export const legalEntity = {
  name: 'Nuraveda',
  type: 'Sole proprietorship',
  owner: 'Tejas Karan Agrawal',
  address: '77 Huntley St, Toronto, ON M4Y 2P3, Canada',
  phone: '+1 437 539 7958',
  email: 'support@glitchexecutor.com',
  jurisdiction: 'Province of Ontario, Canada',
  arbitrationSeat: 'Toronto, Ontario',
  arbitrationRules: 'ADR Institute of Canada, Inc.',
  dataStorageRegion: 'Iowa, United States',
} as const;

export const nav = [
  { href: '/#outcomes',    label: 'Results' },
  { href: '/#services',    label: 'Services' },
  { href: '/#pilot',       label: 'Trial' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog',         label: 'Blog' },
  { href: '/#faq',         label: 'FAQ' },
] as const;

export const legalNav = [
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/terms',   label: 'Terms' },
] as const;

export type NavItem = (typeof nav)[number];


// Public social profiles — surfaced via <SocialIcons/> in Nav + Footer.
export const socialLinks = [
  { name: 'Instagram', handle: 'glitch_executor',   href: 'https://www.instagram.com/glitch_executor/',          icon: '/icons/social/instagram.svg' },
  { name: 'TikTok',    handle: '@glitchexec',       href: 'https://www.tiktok.com/@glitchexec',                  icon: '/icons/social/tiktok.svg' },
  { name: 'Facebook',  handle: 'glitchexecutor',    href: 'https://www.facebook.com/glitchexecutor',             icon: '/icons/social/facebook.svg' },
  { name: 'X',         handle: '@GlitchExecutor',   href: 'https://x.com/GlitchExecutor',                        icon: '/icons/social/x.svg' },
  { name: 'LinkedIn',  handle: 'glitch-executor',   href: 'https://www.linkedin.com/company/glitch-executor/',   icon: '/icons/social/linkedin.svg' },
  { name: 'Reddit',    handle: 'u/glitchExecutor',  href: 'https://www.reddit.com/user/glitchExecutor/',         icon: '/icons/social/reddit.svg' },
  { name: 'Discord',   handle: 'Glitch Trade',      href: 'https://discord.gg/F7KZybe7',                         icon: '/icons/social/discord.svg' },
] as const;
