# AI SEO Star Project — Glitch Trade ecosystem

Unified playbook for **three surfaces** that together comprise the Trade
property. Mirrors the structure proven on grow.glitchexecutor.com (agency
agents) and edge.glitchexecutor.com (Cloudbet automation), adapted to the
**prop-firm challenge automation + algo-trading** vertical.

## The three surfaces

| Surface | Repo | Tech | Role |
| --- | --- | --- | --- |
| Marketing | `glitch-trade-site` | Astro 4.16 (static, CF Pages) | Main SEO surface. Hosts every comparison, glossary, tool, blog, and pSEO page. |
| App | `glitch-trade-app` | Vite + React 18 SPA (CF Pages) | Auth-gated product. Narrow public SEO: login route, OG cards on shareable deep-links, app-as-MCP-server endpoint, structured data on landing/login. |
| Docs | `glitch-trade-docs` | Mintlify (`docs.json`) | Developer-SEO surface. Carries broker integration guides, firm-rule references, backtest concepts — exactly what LLMs need when devs ask "how do I backtest with FTMO rules." |

**Why this matters now:** the product targets a category (prop-firm challenge
software) where most existing tooling is either spreadsheet-based,
forum-ranked, or behind Discord paywalls. AI answer engines have very thin
authoritative content to draw from. Whoever publishes structured, factual,
sourced, comparison-grade content first becomes the default citation.

Ethical posture (carries over from grow/edge): no cloaking, no AI-content
spam at scale, no link buying, no scraping competitor copy. Comparison
tables cite the competitor's own pricing page; firm-rule pages cite the
firm's own terms. This is YMYL-adjacent (money/risk), so factual accuracy
is the moat.

## Target outcomes (90 days)

- **Citation rate ≥ 30%** on ~30 tracked prompts (ChatGPT / Claude / Perplexity / Gemini) covering:
  - "best prop firm tracker / journal / EA"
  - "FTMO / FundingPips / MFF / Apex / The5ers / GetLeveraged drawdown rules"
  - "MetaApi vs ProjectX vs DXtrade direct"
  - "backtest with firm rules" / "EA scalping rules" / "news lockout EA"
  - "Pickmytrade alternative" / "FundedNext journal alternative"
- **20+ ranking pages** in Google AI Overviews / SGE for buying-intent + reference queries.
- **App MCP endpoint** at `/api/mcp.json` published and listed in directory aggregators (mcp.so, Smithery).
- **Developer-SEO**: docs pages cited by Anthropic/OpenAI when asked "how does Glitch Trade compute drawdown" etc.

## Vertical-specific axes (not from grow/edge playbook)

The Trade vertical introduces new SEO surfaces that weren't on prior sites:

- **Prop firms** — FundingPips, FTMO, MyForexFunds, Apex, The5ers, GetLeveraged, FundedNext, TopStep, Earn2Trade, MFF, OFP, Lux Trading Firm.
- **Brokers / bridges** — cTrader, TradeLocker, DXtrade, MT4, MT5, NinjaTrader, ProjectX, MetaApi, Match-Trader.
- **Strategies / personas** — scalpers, ICT/SMC traders, news traders, swing traders, algo developers, copy-traders.
- **Calculators** — drawdown calc, position sizing under firm rules, payout estimator, risk-of-ruin, prop-firm-cost-vs-self-funded.
- **Glossary** — drawdown (max vs daily), consistency rule, news lockout, scaling plan, profit split, payout cycle, EA scalping rule, equity floor.

## Critical files (existing, will be touched)

- `glitch-trade-site/astro.config.mjs` — sitemap filter (must exclude `/app/*` and `/api/*`)
- `glitch-trade-site/src/layouts/Base.astro` — head, JSON-LD injection
- `glitch-trade-site/src/components/JsonLd.astro` — reuse for new schema types
- `glitch-trade-site/src/lib/site.ts` — Organization sameAs expansion
- `glitch-trade-site/src/content/config.ts` — extend with `alternatives`, `vs`, `glossary`, `firms`, `brokers` collections
- `glitch-trade-site/public/robots.txt` — AI crawler allowlist
- `glitch-trade-app/index.html` — meta tightening + JSON-LD on shell
- `glitch-trade-docs/docs.json` — global meta description (already good); add per-page meta where missing

## Hard guardrails

- **`/app/*` is the React SPA**, deployed separately. The site sitemap filter MUST exclude it. The site link-audit script MUST skip it. Confirmed convention from the edge program.
- **Auth-gated routes never get indexed.** Only `/login` and any explicit landing route (if added) ship to crawlers. `noindex` on every other public-facing SPA route via meta + robots disallow if/where reachable.
- **No fake reviews / aggregateRating** until real ones exist.
- **No "guaranteed pass" claims** for prop firms — prop trading is regulated-adjacent; YMYL posture applies hard.
- **No firm-name affiliate-spam pages.** Comparison pages compare honestly with citation to firm's own rules; if/when we have affiliate codes, they're disclosed inline.

---

## Phase plan

### Phase 1 — Technical AI-readability foundation (Weeks 1–2)
*Repo: glitch-trade-site (primary), glitch-trade-app + glitch-trade-docs (cross-cutting)*

- Schemas on the Astro site: `FAQSchema`, `BreadcrumbSchema`, `HowToSchema`, `ProductSchema`, `WebApplicationSchema`, `SoftwareApplicationSchema`, `ClaimSchema`, `StatCallout` (Quotation JSON-LD). Copy from edge repo (`/home/support/glitch-edge-site/src/components/schema/`) — 95% portable.
- `llms.txt` + `llms-full.txt` for the marketing site root.
- `robots.txt` upgrade with explicit Allow for GPTBot/ClaudeBot/ClaudeWeb/PerplexityBot/Google-Extended/CCBot/Bytespider/Applebot-Extended, and Disallow `/app/*` and `/api/*` for every bot.
- Sitemap filter on `astro.config.mjs` excluding `/app`, `/api/`, `/thanks`.
- Per-page Product schema on `/pricing` + WebApplication schema on `/`.
- `Organization.sameAs` in Base.astro lists Codeberg + LinkedIn + X + the docs + the app + the grow/edge sister properties.
- App side: `glitch-trade-app/index.html` gets a JSON-LD `WebApplication` block + `Organization` reference + canonical to `https://trade.glitchexecutor.com/`.
- App MCP endpoint: `glitch-trade-app/functions/api/mcp.json.ts` (CF Pages function) exposing modules (Run/Test/Track + Firm Mode), brokers, firms, pricing, canonical-facts array.
- Schema validator script: `scripts/validate-schemas.ts` (port from edge).

### Phase 2 — Comparison + alternatives + glossary cluster (Weeks 3–6)
*Repo: glitch-trade-site*

Content collections in `src/content/config.ts`:

- `/alternatives/{competitor}` × 10 — Pickmytrade, TradingView-to-MT4 alerts, FundedNext journal, Quantower, NinjaTrader, MT5 EA Builder, ProjectX, Match-Trader Manager, Trade Mentor, ProfitTradingApp.
- `/vs/{competitor}` × 10 — Glitch Trade vs each.
- `/firms/{firm}` × 12 — FundingPips, FTMO, MyForexFunds, Apex, The5ers, GetLeveraged, FundedNext, TopStep, Earn2Trade, OFP Funding, Lux Trading Firm, BluFX.
- `/brokers/{broker}` × 7 — cTrader, TradeLocker, DXtrade, MT4 via MetaApi, MT5 via MetaApi, NinjaTrader, ProjectX.
- `/glossary/{term}` × 25 — drawdown (max vs daily), consistency rule, news lockout, EA scalping rule, scaling plan, profit split, payout cycle, equity-floor, account-floor, lot-sizing, risk-of-ruin, expectancy, max-favorable-excursion, slippage, latency-arbitrage, copy-trading, prop-firm, demo-funded-vs-live-funded, hidden-rules, leverage-cap, micro-lot, swap, weekend-holding, news-trading-rule, hedge-rule.

Each page template:
- H1 with exact-match query phrasing
- TL;DR ≤ 60 words (LLM extraction zone)
- Honest comparison table with citation to source
- FAQPage schema (5–8 Qs)
- Last-updated timestamp
- Citations block linking to primary sources (firm terms, broker pricing, etc.)

### Phase 3 — Free tools as citation magnets (Weeks 5–8)
*Repo: glitch-trade-site*

- `/tools/firm-drawdown-calculator` — input balance + firm + days → projected drawdown buffer
- `/tools/position-sizing-firm-mode` — input balance + risk% + firm-DD-rule → max lot
- `/tools/payout-estimator` — input firm + profit + split + cycle → next-payout estimate
- `/tools/risk-of-ruin` — input win rate + R:R + bet fraction → ruin probability
- `/tools/prop-firm-cost-vs-self-funded` — TCO over 3 firms × 12 months vs self-funding equivalent

Each tool: HowTo schema, FAQ schema, embeddable widget snippet, shareable result URLs.

### Phase 4 — Programmatic SEO (Weeks 6–10)
*Repo: glitch-trade-site*

Generate `/firms/{firm}/for-{strategy}` from `src/data/pseo-trade-matrix.ts`:
- 12 firms × 5 personas (scalpers, ICT/SMC, news traders, swing traders, algo developers) = **60 pSEO pages**.
- Each ≥ 400 words unique; persona section genuinely differs per row.
- CI uniqueness check (Levenshtein vs sibling pages); auto-`noindex` on fails.

### Phase 5 — Team / authorship + Person JSON-LD (Week 8)
*Repo: glitch-trade-site*

Virtual editorial personas matching grow/edge convention:
- **Ryan Tran** — Strategy lead (firm-rule modeling, backtest correctness)
- **Lena Park** — Broker integration (cTrader/TradeLocker/DXtrade engineering)

Person JSON-LD with `worksFor` → Glitch Executor Labs. `sameAs` strictly org-level (Codeberg/LinkedIn).

### Phase 6 — Citation tracker + monitoring (Week 9)
*Repo: glitch-trade-site*

Port from edge: `scripts/ai-citation-check.ts`, `scripts/citation-prompts.json` (30 Trade-specific prompts), `scripts/validate-schemas.ts`, `scripts/link-audit.ts` (with `/app/*` skip), `scripts/gsc-check.ts`, `scripts/pricing-watcher.ts` (10 competitors), `scripts/backlink-watch.ts`, `scripts/loser-prompts.ts`. Same SA at `/home/support/glitch-grow-ai-seo-agent-private/credentials/google-sa.json`.

### Phase 7 — Content engine (Weeks 10–12+)
*Repo: glitch-trade-site*

2 blog posts/week, authored by `ryan` or `lena`, written to the AI-Optimized Blog Playbook contract (lede ≤ 60 words, StatCallout, anti-pattern callout, FAQ ≥ 5, 3+ internal links, primary citations). First 4 posts:

1. "FTMO max drawdown vs FundingPips: the daily-vs-static rule trap" (Lena)
2. "Backtesting with firm rules: why your TradingView strategy lies" (Ryan)
3. "MetaApi vs broker-direct: latency, cost, and what breaks at 2am" (Lena)
4. "News-lockout EAs: the 12 firms that ban them and the 4 workarounds that hold up" (Ryan)

### Phase 8 — Docs SEO (Weeks 8–12)
*Repo: glitch-trade-docs*

Mintlify-specific playbook (different from content-SEO):
- Per-page `description` + `keywords` review (Mintlify supports both).
- Add `/llms.txt` and `/llms-full.txt` to Mintlify root (Mintlify serves `public/` content).
- Expand `concepts/` with 10 new pages (consistency-rule, drawdown-math, EA-rules, payout-cycles, scaling-plans, broker-bridge-latency, MetaApi-internals, copy-trading-mode, news-blackouts, weekend-holding).
- Per-broker page expansion: real symbol lists, common gotchas, login flow screenshots, latency benchmarks (cited).
- Internal links → marketing site comparison pages (cross-property SEO).
- Submit Mintlify-generated sitemap to GSC under `sc-domain:glitchexecutor.com` (if docs lives under that root) or its own property.

### Phase 9 — App-side SEO (Week 11)
*Repo: glitch-trade-app*

The SPA's narrow SEO scope:
- Static prerender of `/login` and any other public route (Vite + `vite-plugin-prerender` or hand-rolled `dist/login/index.html`).
- JSON-LD `WebApplication` + `SoftwareApplication` block in `index.html`.
- OG card per public route (login, signup landing if exists).
- `/api/mcp.json` CF Pages function — app-as-MCP-server endpoint with capabilities (broker connections, strategy authoring, backtest, account tracking), brokers list, firms list, canonical facts.
- App changelog at `/changelog` (already have `CHANGELOG.md`) prerendered + indexable — LLMs love changelogs for "what's new" queries.

### Phase 10 — Off-page program (Weeks 10–12+)
*Repo: glitch-trade-site*

Niche-specific Tier 1–7 backlinks playbook + ongoing SEO operator playbook (port from edge structure, adapt to prop-firm/algo-trading directories):

- **Tier 1** — Prop-firm aggregator directories (PropFirmMatch, PropFirms.com, PropFirmHub), algo-trading marketplaces (NinjaTrader Ecosystem, TradingView strategies), AlternativeTo (prop trading tools), GitHub awesome-quant + awesome-algo-trading PRs.
- **Tier 2** — Reddit (r/Forex, r/algotrading, r/Daytrading, r/PropTradingFirms) — earn, don't drop. 6-month commitment.
- **Tier 3** — GitHub topics on the public mirror; Codeberg explore.
- **Tier 4** — HARO / Featured.com prop-trading + algo-trading queries (legal entity bylines, not virtual personas).
- **Tier 5** — Podcast appearances (Chat With Traders, Better System Trader, Top Traders Unplugged tooling segments).
- **Tier 6** — Calculator embeds via `?embed=1` to prop-firm review sites.
- **Tier 7** — Wikipedia long-game (drawdown article expansion with verifiable academic citations only).

---

## Verification gates (every phase)

1. **Build & typecheck**: `pnpm build && pnpm astro check` green.
2. **Schema validation**: `pnpm run schemas:validate` — 0 invalid JSON-LD.
3. **Link audit**: `pnpm run links:audit` — 0 broken internal links, `/app/*` confirmed skipped.
4. **Sitemap audit**: no `/app/*` or `/api/*` URLs in `dist/sitemap-0.xml`.
5. **Lighthouse**: existing CI budget must not regress.
6. **Playwright smoke**: FAQ accordion, comparison pages render, llms.txt reachable.
7. **AI-citation baseline** before Phase 1 ships; weekly thereafter.

## Out of scope (explicit)

- Paid backlinks / PBNs / link exchanges.
- AI-generated thin content at scale — every page human-edited.
- "Guaranteed pass" claims, fake testimonials, fake fundedness numbers.
- Scraping competitor copy or pulling pricing without attribution.
- Touching `/app/*` from the site repo — separate concern, separate deploy.
- Affiliate-spam pages without disclosure.

## Repo coordination

- All site code in `/home/support/glitch-trade-site`.
- App-side SEO in `/home/support/glitch-trade-app`.
- Docs SEO in `/home/support/glitch-trade-docs`.
- Shared SA key for GSC + GA + GTM: `/home/support/glitch-grow-ai-seo-agent-private/credentials/google-sa.json` (`glitch-vertex-ai@capable-boulder-487806-j0.iam.gserviceaccount.com`).
- Per global git rule: every commit pushed immediately.

## Current state (kickoff)

- Site: ~9 marketing pages built, content collections (`blog`, `case-studies`) defined but empty/light.
- App: SPA shell present, `index.html` has decent meta + OG.
- Docs: 13 Mintlify pages live (getting-started + concepts + brokers + plans).
- No schemas, no llms.txt, no AI-crawler allowlist, no MCP endpoint, no comparison cluster, no glossary, no tools, no pSEO, no citation tracker, no off-page program. **Pure greenfield for AI-SEO.**

This document is the kickoff plan. Phases ship in commits, one per phase, each gated by the verification list above.
