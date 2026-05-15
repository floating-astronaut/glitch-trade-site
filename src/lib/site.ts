export const site = {
  name: 'Glitch Trade',
  parent: 'Glitch Executor Labs',
  domain: 'trade.glitchexecutor.com',
  url: 'https://trade.glitchexecutor.com',
  contactEmail: 'support@glitchexecutor.com',
  tagline: 'Run. Test. Track.',
  description:
    'Run simple or complex trading automation, backtest it against historical bars, and track every connected account in one dashboard. Firm Mode adds prop-firm breach gauges and payout countdowns.',
  ogImage: '/assets/brand/og-image.png',
  twitter: '@glitchexecutor',
  locale: 'en-US',
} as const;

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
  { href: '/#platform', label: 'Run · Test · Track' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/brokers', label: 'Brokers' },
  { href: '/prop-firms', label: 'Firm Mode' },
  { href: '/about', label: 'About' },
] as const;

export const legalNav = [
  { href: '/legal/privacy', label: 'Privacy' },
  { href: '/legal/terms', label: 'Terms' },
] as const;

export type NavItem = (typeof nav)[number];

export const socialLinks = [
  { name: 'Instagram', handle: 'glitch_executor', href: 'https://www.instagram.com/glitch_executor/', icon: '/icons/social/instagram.svg' },
  { name: 'TikTok', handle: '@glitchexec', href: 'https://www.tiktok.com/@glitchexec', icon: '/icons/social/tiktok.svg' },
  { name: 'Facebook', handle: 'glitchexecutor', href: 'https://www.facebook.com/glitchexecutor', icon: '/icons/social/facebook.svg' },
  { name: 'X', handle: '@GlitchExecutor', href: 'https://x.com/GlitchExecutor', icon: '/icons/social/x.svg' },
  { name: 'LinkedIn', handle: 'glitch-executor', href: 'https://www.linkedin.com/company/glitch-executor/', icon: '/icons/social/linkedin.svg' },
  { name: 'Reddit', handle: 'u/glitchExecutor', href: 'https://www.reddit.com/user/glitchExecutor/', icon: '/icons/social/reddit.svg' },
  { name: 'Discord', handle: 'Glitch Trade', href: 'https://discord.gg/Fsnt63pmS', icon: '/icons/social/discord.svg' },
] as const;
