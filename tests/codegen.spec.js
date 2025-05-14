import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await page.getByRole('link', { name: 'Bootstrap Alerts' }).click();
  await page.getByRole('button', { name: 'Autoclosable Success Message' }).click();
});