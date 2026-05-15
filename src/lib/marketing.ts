export const appLinks = {
  signup: 'https://trade-app.glitchexecutor.com',
  quick: 'https://trade-app.glitchexecutor.com/quick',
} as const;

export const hero = {
  title: 'Glitch Trade - the platform to run, test, and track AI trading automation.',
  subtitle: 'Prop-firm challenge tracking included.',
  intro:
    'From "buy BTCUSD at 80k, sell at 81k" to a prop-firm-aware strategy with guardrails, the same platform lets you run it live, test it on historical bars, and track it across every connected account.',
} as const;

export const verbs = [
  {
    name: 'Run',
    title: 'Deploy any rule to a broker account',
    detail:
      'Start with a quick rule, a visual flow, a TradingView alert, or code. The platform hosts the automation and keeps the execution path readable.',
    example: 'Example: "Buy BTCUSD at 80k, sell at 81k" goes from idea to live rule without watching the chart all day.',
  },
  {
    name: 'Test',
    title: 'Backtest against historical bars before you risk money',
    detail:
      'Replay past candles, compare variants, and add Firm Mode guardrails when you need to see whether a setup would have breached challenge rules.',
    example: 'Example: Pre-flight a FundingPips or FTMO idea before you spend real challenge money.',
  },
  {
    name: 'Track',
    title: 'Keep every connected account in one dashboard',
    detail:
      'See equity, deal logs, per-bot attribution, and account history in one place. Turn on Firm Mode for breach gauges and payout countdowns.',
    example: 'Example: one dashboard for a casual swing account, a test account, and a prop challenge account.',
  },
] as const;

export const personas = [
  {
    name: 'Casual swing trader',
    pain: '"Buy BTCUSD at 80k, sell at 81k" should run without me staring at the screen.',
    fit: 'Quick rule builder, one connected account, simple deploy path, seven-day tracking on Free.',
  },
  {
    name: 'TradingView-alert user',
    pain: 'My alert already exists. I need execution and tracking without more Pine glue.',
    fit: 'Webhook ingestion, rule mapping, and account tracking without rewriting your whole workflow.',
  },
  {
    name: 'Prop-firm trader',
    pain: 'I want to know whether this strategy breaches FundingPips, FTMO, MFF, Apex, or The5ers rules before I pay for the challenge.',
    fit: 'Firm Mode adds rule-aware pre-flight checks, breach gauges, and payout countdowns.',
  },
  {
    name: 'Quant tinkerer',
    pain: 'I want a code editor, backtester, walk-forward tooling, and one-click deploy without building the whole shell myself.',
    fit: 'Code editor, strategy SDK, walk-forward testing, and Pro+ / Pro Quant depth when you need it.',
  },
] as const;

export const brokers = [
  {
    name: 'cTrader',
    short: 'Read-only OAuth',
    trust: 'Most trust-friendly path. You authorize a read-only connection, we track the account, and you keep control of execution decisions.',
    detail: 'Best starting point for users who want the cleanest permissions story from day one.',
  },
  {
    name: 'TradeLocker',
    short: 'Credential exchange once',
    trust: 'Username and password are exchanged once for a refresh token, then the password is discarded.',
    detail: 'Good when you want the Glitch Trade dashboard but your broker flow is not on cTrader.',
  },
  {
    name: 'DXtrade',
    short: 'Live integration in progress',
    trust: 'Same credentialed model as TradeLocker: password exchanged once for a refresh token, then discarded.',
    detail: 'Included in the roadmap and marketing surface now because it is part of the locked broker story.',
  },
  {
    name: 'MT4 / MT5 via MetaApi',
    short: 'Bridge any Meta broker',
    trust: 'MetaApi.cloud acts as the bridge so MT brokers such as ICMarkets, Pepperstone, FTMO, or MFF can feed into the same tracking model.',
    detail: 'Useful when you need MT portability rather than a broker-native dashboard.',
  },
] as const;

export const firms = [
  {
    name: 'FundingPips Zero',
    rules: ['5% trailing drawdown', '3% daily loss', '4% target'],
    note: 'Good for testing tight trailing logic before you fund the real challenge.',
  },
  {
    name: 'FTMO Phase 1',
    rules: ['10% target', '5% daily loss', '10% overall loss'],
    note: 'Use Firm Mode to see whether your rule set stays inside daily and total limits.',
  },
  {
    name: 'MFF',
    rules: ['8% target', '5% daily loss', '8% overall loss'],
    note: 'Pre-flight trend or breakout ideas without guessing where the account would have bent.',
  },
  {
    name: 'Apex',
    rules: ['Trailing drawdown', 'Account-specific thresholds', 'Payout timing matters'],
    note: 'Track countdowns and breach distance instead of managing challenge math in a spreadsheet.',
  },
  {
    name: 'The5ers',
    rules: ['4% static drawdown', '1% daily loss', 'Consistency matters'],
    note: 'Useful when you want static-rule visibility without losing the universal dashboard.',
  },
] as const;

export const tiers = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    audience: 'Start with one quick rule and one connected account.',
    features: ['Quick-rule builder', '1 backtest/day', '1 connected account', '7-day track history'],
  },
  {
    name: 'Pro',
    price: '$19',
    cadence: '/mo',
    audience: 'For traders who want the visual builder and one firm-aware workflow.',
    features: ['Visual builder', 'Unlimited backtests', '3 accounts', 'Full history', 'Firm Mode for 1 firm'],
  },
  {
    name: 'Pro+',
    price: '$49',
    cadence: '/mo',
    audience: 'For users who need code, walk-forward, alerts, and all five firm rule sets.',
    features: ['Code editor', 'Walk-forward', 'All 5 firms', '10 accounts', 'Alerts', 'Marketplace publish'],
    featured: true,
  },
  {
    name: 'Pro Quant',
    price: '$99',
    cadence: '/mo',
    audience: 'For teams that want API access now and hosted execution later.',
    features: ['Hosted execution later', 'Unlimited accounts', 'API access'],
  },
] as const;

export const comparisonRows = [
  { label: 'Quick-rule builder', values: ['Included', 'Included', 'Included', 'Included'] },
  { label: 'Backtests', values: ['1 per day', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { label: 'Connected accounts', values: ['1', '3', '10', 'Unlimited'] },
  { label: 'Track history', values: ['7 days', 'Full history', 'Full history', 'Full history'] },
  { label: 'Firm Mode', values: ['Not included', '1 firm', 'All 5 firms', 'All 5 firms'] },
  { label: 'Code editor', values: ['No', 'Read-only context', 'Write access', 'Write access'] },
  { label: 'Walk-forward', values: ['No', 'No', 'Included', 'Included'] },
  { label: 'Alerts', values: ['No', 'No', 'Included', 'Included'] },
  { label: 'Marketplace publish', values: ['No', 'No', 'Included', 'Included'] },
  { label: 'API access', values: ['No', 'No', 'No', 'Included'] },
] as const;

export const faqs = [
  {
    q: 'Do you trade on my behalf?',
    a: 'No. Glitch Trade is tooling. You author the automation, decide the broker path, and stay responsible for execution decisions.',
  },
  {
    q: 'Is this only for prop-firm traders?',
    a: 'No. Prop-firm challenge tracking is included as Firm Mode, but the wider product is for anyone who wants to run, test, and track trading automation.',
  },
  {
    q: 'What does “AI” mean here?',
    a: 'It means the platform can host user-authored automation that may use AI or machine-learning logic. We do not promise alpha, prediction, or guaranteed outcomes.',
  },
  {
    q: 'Can I start with a simple rule?',
    a: 'Yes. The simplest path is the quick-rule flow: describe the trade, test it, then deploy it without building a full code project.',
  },
  {
    q: 'What is the marketplace rev share?',
    a: 'When authors sell strategies through the marketplace, Glitch Trade takes 30% and the author keeps 70%.',
  },
  {
    q: 'Which brokers and firm contexts are supported?',
    a: 'The locked marketing set is cTrader, TradeLocker, DXtrade, and MT4/MT5 via MetaApi, plus FundingPips Zero, FTMO Phase 1, MFF, Apex, and The5ers in Firm Mode.',
  },
] as const;
