import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const heading = page.locator('h1');
  await expect(heading).toHaveText(/User List/);
});
