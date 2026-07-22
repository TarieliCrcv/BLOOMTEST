import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('baseURL');
  expect(URL).toBe('baseURL')
});