import { test, expect } from '@playwright/test';

test.describe('smoke', () => {
  test('home renders hero + has skip link + brand nav', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Glitch Trade/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/indicator isn't an edge|Nine models are/i);
    // Skip link is rendered and points at #main.
    const skip = page.locator('a.skip-link');
    await expect(skip).toHaveAttribute('href', '#main');
    // Nav shows brand wordmark.
    await expect(page.getByRole('banner').getByText(/Trade/)).toBeVisible();
  });

  test('case studies index lists the spotlight', async ({ page }) => {
    await page.goto('/case-studies');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('link', { name: /Walk-forward backtest|Read case/ })).toBeVisible();
  });

  test('case study detail page renders', async ({ page }) => {
    await page.goto('/case-studies/btc-ensemble-backtest');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Walk-forward backtest/);
    await expect(page.getByText(/63%/).first()).toBeVisible();
  });

  test('legal + thanks render without errors', async ({ page }) => {
    for (const path of ['/legal/privacy', '/legal/terms', '/thanks']) {
      const resp = await page.goto(path);
      expect(resp?.status(), path).toBeLessThan(400);
      await expect(page.getByRole('heading', { level: 1 }), path).toBeVisible();
    }
  });

  test('JSON-LD organization + website blocks present on home', async ({ page }) => {
    await page.goto('/');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const merged = blocks.join('\n');
    expect(merged).toContain('"Organization"');
    expect(merged).toContain('"WebSite"');
  });

  test('robots + sitemap are reachable', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toMatch(/Sitemap:/);
    const sitemap = await request.get('/sitemap-index.xml');
    expect(sitemap.status()).toBe(200);
  });

  test('no obvious console errors on home', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    await page.goto('/');
    // `load`, not `networkidle`: Turnstile + analytics scripts can keep the
    // network busy indefinitely on localhost (unauthorized hostname, poll loops).
    // `load` is sufficient — any console error from our own code fires before it.
    await page.waitForLoadState('load');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});
