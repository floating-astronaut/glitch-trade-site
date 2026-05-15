import { test, expect } from '@playwright/test';

test.describe('smoke', () => {
  test('home renders locked rev 4 hero + brand nav', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Glitch Trade/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/the platform to run, test, and track AI trading automation/i);
    await expect(page.getByText(/Prop-firm challenge tracking included/i)).toBeVisible();
    const skip = page.locator('a.skip-link');
    await expect(skip).toHaveAttribute('href', '#main');
    await expect(page.getByRole('banner').getByText(/Glitch/)).toBeVisible();
  });

  test('new marketing pages render', async ({ page }) => {
    for (const path of ['/pricing', '/brokers', '/prop-firms', '/about']) {
      const resp = await page.goto(path);
      expect(resp?.status(), path).toBeLessThan(400);
      await expect(page.getByRole('heading', { level: 1 }), path).toBeVisible();
    }
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
    await page.waitForLoadState('load');
    expect(errors, errors.join('\n')).toEqual([]);
  });
});
