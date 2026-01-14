const { test, expect } = require('@playwright/test');

test('login succeeds with valid credentials', async ({ page }) => {
  // 1) Always go to the clean URL (no jsessionid)
  await page.goto('https://parabank.parasoft.com/parabank/');

  // 2) Wait until the login form fields are visible
  await expect(page.locator('input[name="username"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();

  // 3) Fill credentials (replace with yours)
  await page.locator('input[name="username"]').fill('YOUR_UESRNAME');
  await page.locator('input[name="password"]').fill('YOUR_PASSWORD');

  // 4) Click Log In
  await page.getByRole('button', { name: /log in/i }).click();

  // 5) Assert login succeeded (Log Out link becomes visible)
  await expect(page.getByRole('link', { name: /log out/i })).toBeVisible();
});
