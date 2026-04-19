// Single source of truth for brand metadata, nav links, and pricing-free copy.
// Keep this file dependency-free — imported from both server and client code.

export const site = {
  name: 'Glitch Trade',
  parent: 'Glitch Executor',
  domain: 'trade.glitchexecutor.com',
  url: 'https://trade.glitchexecutor.com',
  contactEmail: 'support@glitchexecutor.com',
  tagline: '9 AI models. One trading edge.',
  description:
    '9-model AI ensemble analyzing crypto markets 24/7. Signals delivered via Telegram. Auto-execute on 100+ supported exchanges. Start your free trial today.',
  ogImage: '/assets/brand/og-image.png',
  twitter: '@glitchexecutor',
  locale: 'en-US',
} as const;

export const nav = [
  { href: '/#outcomes',    label: 'Results' },
  { href: '/#services',    label: 'Signals' },
  { href: '/#pilot',       label: 'Trial' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/#faq',         label: 'FAQ' },
] as const;

export const legalNav = [
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/terms',   label: 'Terms' },
] as const;

export type NavItem = (typeof nav)[number];
