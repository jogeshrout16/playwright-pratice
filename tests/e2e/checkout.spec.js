const { test, expect } = require('@playwright/test');
const { CheckoutPage } = require('../../src/pages/CheckoutPage');

test('checkout page navigation', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
  await checkoutPage.openCart();
  await checkoutPage.proceedToCheckout();
});
