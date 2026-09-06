const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../src/pages/LoginPage');
const userData = require('../../src/fixtures/userData');

test('login page loads', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(page.locator('text=Login')).toBeVisible();
  await loginPage.login(userData.validUser.username, userData.validUser.password);
});
